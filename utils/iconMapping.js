// utils/iconMapping.js
import {
  Globe,
  Car,
  Camera,
  Thermometer,
  Smartphone,
  Truck,
  Building,
  Heart,
  Users,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Battery,
  Wrench,
  Settings,
  Grid,
  List,
  Eye,
  Download,
  ExternalLink,
  Award,
} from "lucide-react";

export const iconMap = {
  Globe,
  Car,
  Camera,
  Thermometer,
  Smartphone,
  Truck,
  Building,
  Heart,
  Users,
  Shield,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Battery,
  Wrench,
  Settings,
  Grid,
  List,
  Eye,
  Download,
  ExternalLink,
  Award,
};

export const getIcon = (iconName, props = {}) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? React.createElement(IconComponent, props) : null;
};
