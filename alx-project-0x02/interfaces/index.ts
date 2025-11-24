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


// ----------------------------------------------------------------
// NEW INTERFACES FOR BUTTON COMPONENT
// ----------------------------------------------------------------

// Define possible string literal types for better type checking
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  children: React.ReactNode;
}

export interface PostCardProps {
  title: string;
  body: string; // Using 'body' from the API data
  userId: number;
}

export interface PostsPageProps {
  posts: PostCardProps[];
}