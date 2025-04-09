"use client";
import { InputField } from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { PhoneField } from "@/components/Forms/PhoneField";
import { FormHeader } from "@/components/Forms/FormHeader";
import styles from "./ContactForm.module.css"
import { useContactForm } from "@/hooks/useContactForm";
export const ContactForm = () => {
  const {
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
  } = useContactForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader />
      <div className={styles.blockInput}>
        <InputField type="text" placeholder="Imię" value={name} onChange={setName} />
        <PhoneField value={phone} onChange={setPhone} />
        <InputField type="email" placeholder="E-mail" value={email} onChange={setEmail} />
        <TextAreaField placeholder="Wiadomość" value={message} onChange={setMessage} />
      </div>
      <button className={`${styles.button} ${isSubmitting ? styles.disabled : styles.enabled}`} disabled={isSubmitting}>
        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
      </button>

      {success && (
        <p className={`${styles.message} ${success.includes("Błąd") || success === "Wszystkie pola są wymagane!" ? styles.error : styles.success}`}>
         {success}
        </p>
      )}
    </form>
  );
};