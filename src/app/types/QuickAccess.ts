'use client'
import type { LucideIcon } from 'lucide-react';


// Definisikan tipe untuk item
export interface QuickAccessItem {
    id: number;
    title: string;
    icon: LucideIcon;
    description: string;
    url: string;
    gradient: string;
    shadowColor: string;
  }
  
export interface QuickAccessCardProps {
    item: QuickAccessItem;
    onClick: (url: string) => void;
  }
  