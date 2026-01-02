'use client';

import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  customizations?: string[];
  image?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

const TAX_RATE = 0.08; // 8% tax

function calculateTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

export function useCart() {
  const [items, setItems, clearStorage] = useLocalStorage<CartItem[]>('cart-items', []);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (newItem: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
      setItems((currentItems) => {
        const existingItemIndex = currentItems.findIndex(
          (item) =>
            item.id === newItem.id &&
            JSON.stringify(item.customizations) === JSON.stringify(newItem.customizations)
        );

        if (existingItemIndex > -1) {
          // Item exists, update quantity
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity,
          };
          return updatedItems;
        }

        // Item doesn't exist, add it
        return [...currentItems, { ...newItem, quantity }];
      });
    },
    [setItems]
  );

  const removeItem = useCallback(
    (itemId: string, customizations?: string[]) => {
      setItems((currentItems) =>
        currentItems.filter(
          (item) =>
            !(
              item.id === itemId &&
              JSON.stringify(item.customizations) === JSON.stringify(customizations)
            )
        )
      );
    },
    [setItems]
  );

  const updateQuantity = useCallback(
    (itemId: string, quantity: number, customizations?: string[]) => {
      if (quantity <= 0) {
        removeItem(itemId, customizations);
        return;
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.id === itemId &&
          JSON.stringify(item.customizations) === JSON.stringify(customizations)
            ? { ...item, quantity }
            : item
        )
      );
    },
    [setItems, removeItem]
  );

  const clearCart = useCallback(() => {
    clearStorage();
  }, [clearStorage]);

  const toggleCart = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const { subtotal, tax, total } = calculateTotals(items);

  return {
    items,
    itemCount,
    subtotal,
    tax,
    total,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  };
}

