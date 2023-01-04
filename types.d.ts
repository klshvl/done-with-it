import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Category {
  label: string;
  value: number;
  backgroundColor?: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}
interface Inputs {
  email: string;
  password: string;
  title: string;
  price: string;
  description: string;
  category?: Category;
  images?: string[];
}
