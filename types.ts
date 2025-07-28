import type { ComponentType } from 'react';

export enum UploadStatus {
  IDLE,
  DRAGGING,
  FILE_SELECTED,
  UPLOADING,
  SUCCESS,
  ERROR,
}

export interface Team {
  id: string;
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  expectedColumns: string[];
  color: string;
  hoverColor: string;
}