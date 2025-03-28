import { Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  status: string;
  image?: string;
  isEmailVerified: boolean;
  verification?: {
    code: string;
    expireDate: Date;
  };
  profession?: string;
  cords?: {
    lat: number;
    lng: number;
  },
  address?: string;
  roles: string[];
  isSocial?: boolean;
  fcmToken?: string;
  totalVolunteeHours?: string;
  topDistance?: string;
  role?: string;

  // method declarations
  comparePassword(userPlanePassword: string): boolean
  compareVerificationCode(userPlaneCode: string): boolean;
}

export default IUser;
