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

// ----------------------------------------------------------------
// NEW INTERFACES FOR USER COMPONENT
// ----------------------------------------------------------------

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  // We can ignore 'geo' for this exercise
}

// Full User interface matching the JSONPlaceholder API structure
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Props required for the UserCard component
export interface UserCardProps {
  name: string;
  email: string;
  address: Address;
  phone: string;
}