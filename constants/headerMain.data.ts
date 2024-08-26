import { HeaderMainProps } from "@/types/HeaderMain";
import { Folder, KeyRound } from "lucide-react";

export const dataHeaderMain: HeaderMainProps[] = [
  {
    icon: KeyRound,
    text: 'Element',
    typeElement: 'password'
  },
  {
    icon: Folder,
    text: 'Folder',
    typeElement: 'file'
  }
]