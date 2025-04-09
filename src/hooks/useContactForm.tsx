"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export const useContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccess("Wszystkie pola są wymagane!");
      return;
    }

    setIsSubmitting(true);
    setSuccess(null);

    try {
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_USER_ID!;

      const templateParams = {
        name,
        email,
        phone: phone || "Nie podano numeru telefonu",
        message,
      };

      const response = await emailjs.send(serviceID, templateID, templateParams, userID);

      if (response.text === "OK") {
        setSuccess("Wiadomość została wysłana!");
        resetForm();
      } else {
        setSuccess("Coś poszło nie так. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Błąd wysyłki email:", error);
      setSuccess("Błąd sieci. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    isSubmitting,
    success,
    handleSubmit,
  };
};
