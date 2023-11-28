
export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title?: string;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
  isCloseIconPresent?: boolean;
  closeBtnClass?: string;
}


export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}


export interface Message {
  user: string;
  text: string;
}

export interface ChatScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HourlyData {
  time: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  rain: number;
  soil_temperature_6cm: number;
  soil_moisture_3_to_9cm: number;
  soil_moisture_27_to_81cm: number;
  // Add other properties as needed
}

// Define the structure of the response data
export interface WeatherResponse {
  utcOffsetSeconds: () => number;
  timezone: () => string;
  timezoneAbbreviation: () => string;
  latitude: () => number;
  longitude: () => number;
  hourly: () => HourlyData[];
  // Add other properties or methods as needed
}