import { useState } from "react";
import { updateUser } from "@/entities/user";
import { useAppDispatch } from "@/shared/model/hooks";
import { userProfileFields } from "./userProfileFields";

export const useUserProfile = (id: string) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleEdit = () => {
    setIsEditing(prev => !prev);
  };

  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));
    const newErrors: Record<string, boolean> = {};

    Object.entries(userProfileFields).forEach(([key]) => {
      if (key !== "comment" && !formData[key]) {
        newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && id) {
      dispatch(updateUser({ id, ...formData }));
    }
  };

  const handleErrors = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  return { handleUpdateUser, isEditing, handleEdit, errors, handleErrors };
};
