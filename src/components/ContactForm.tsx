import { useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
  outfitType: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<ContactFormValues>();

  const onSubmit = () => {
    reset();
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="glass-card space-y-4 p-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-zinc-700">
          Name *
        </label>
        <input
          id="name"
          className="input-field mt-2"
          {...register("name", { required: "Name is required." })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-maroon">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-zinc-700">
          Phone *
        </label>
        <input
          id="phone"
          className="input-field mt-2"
          {...register("phone", {
            required: "Phone number is required.",
            pattern: {
              value: /^[0-9+\-\s()]{7,}$/i,
              message: "Enter a valid phone number."
            }
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-maroon">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input-field mt-2"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email."
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-maroon">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="outfitType" className="text-sm font-medium text-zinc-700">
          Preferred Outfit Type
        </label>
        <select
          id="outfitType"
          className="input-field mt-2"
          {...register("outfitType")}
        >
          <option value="">Select an option</option>
          <option value="Saree">Saree</option>
          <option value="Lehenga">Lehenga</option>
          <option value="Kurti">Kurti</option>
          <option value="Indo-Western">Indo-Western</option>
          <option value="Wedding">Wedding Collection</option>
          <option value="Festive">Festive Wear</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-700">
          Message *
        </label>
        <textarea
          id="message"
          className="input-field mt-2 min-h-[120px]"
          {...register("message", { required: "Message is required." })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-maroon">{errors.message.message}</p>
        )}
      </div>
      <button type="submit" className="primary-btn w-full">
        Send Enquiry
      </button>
      {isSubmitSuccessful && (
        <p className="text-center text-sm text-emerald" role="status">
          Thanks! Your message has been sent.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
