import {
  Globe,
  Lock,
  Star,
  UserRound,
  UserRoundMinus,
  Users,
  
  type LucideIcon,
} from "lucide-react";

export type AudienceId =
  | "public"
  | "friends"
  | "close-friends"
  | "friends-except"
  | "specific-friends"
  | "just-me";

export type AudienceOption = {
  id: AudienceId;
  label: string;
  description: string;
  icon: LucideIcon;
  linkLabel?: string;
};

export const AUDIENCE_OPTIONS: AudienceOption[] = [
  {
    id: "public",
    label: "Công khai",
    description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
    icon: Globe,
  },
  {
    id: "friends",
    label: "Bạn bè",
    description: "Bạn bè của bạn trên Facebook",
    icon: Users,
  },
  {
    id: "close-friends",
    label: "Bạn thân",
    description: "Tạo danh sách",
    icon: Star,
    linkLabel: "Tạo danh sách",
  },
  {
    id: "friends-except",
    label: "Không hiển thị với...",
    description: "Chọn bạn bè",
    icon: UserRoundMinus,
    linkLabel: "Chọn bạn bè",
  },
  {
    id: "specific-friends",
    label: "Chỉ hiển thị với...",
    description: "Chọn bạn bè",
    icon: UserRound,
    linkLabel: "Chọn bạn bè",
  },
  {
    id: "just-me",
    label: "Chỉ mình tôi",
    description:"",
    icon: Lock,
  }
];

export function getAudienceLabel(id: AudienceId) {
  return AUDIENCE_OPTIONS.find((option) => option.id === id)?.label ?? "Công khai";
}
