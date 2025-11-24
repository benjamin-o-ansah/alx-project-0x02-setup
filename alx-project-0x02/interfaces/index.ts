// interfaces/index.ts

export interface WelcomeProps {
  appName: string;
}

// New interface for the Card component
export interface CardProps {
  title: string;
  content: string;
}

// New interface for a Post object
export interface Post {
  id: number;
  title: string;
  content: string;
}

// New interface for the Modal's props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Callback function to send the new post data back to the parent
  onSave: (post: Omit<Post, 'id'>) => void; 
}