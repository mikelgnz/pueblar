import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiInfoCircle } from "react-icons/bi";
import tw from "twin.macro";
import { useAuth0 } from "@auth0/auth0-react";
import { submitHouse } from "@/lib/api/new_house";
import { PuebloHouse_Interface } from "@/types/house";

const SubmitButton: React.FC<{
  children: any;
  submitted: boolean;
}> = ({ children, submitted }) => {
  return (
    <motion.button
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
      css={[
        tw`bg-white text-black items-center justify-center transition-all py-3 px-3 border-b-2 border-slate-200 shadow-xl rounded-lg hover:text-[#e1e6cf] hover:border-[#e1e6cf]`,
        submitted && tw`bg-purple-500`,
      ]}
      type="submit"
    >
      {children}
    </motion.button>
  );
};

export const HouseForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const router = useRouter();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    getAccessTokenSilently()
      .then((myToken) => {
        setToken(myToken);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const submit: SubmitHandler<PuebloHouse_Interface> = async (data) => {
    console.log("Submitting data");
    await submitHouse(data);
    console.log(`House ${data._id} submitted successfully!`);
    router.push("/houses");
  };

  const title = watch("title");

  return (
    <motion.form
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 0.4 }}
      tw="flex flex-col gap-4 w-[600px]"
      method="post"
      onSubmit={handleSubmit(submit)}
    >
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="name-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("title", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 5,
              message: "Debe tener 5 caracteres como mínimo",
            },
          })}
        />
        {errors["title"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["title"]["message"] as string}
          </p>
        )}
      </div>
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="comment">
          Description
        </label>
        <textarea
          rows={5}
          id="comment-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("comment", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 10,
              message: "Debe tener 10 caracteres como mínimo",
            },
          })}
        />
        {errors["comment"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["comment"]["message"] as string}
          </p>
        )}
      </div>
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="condition">
          Condition
        </label>
        <input
          type="text"
          id="condition-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("condition", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 5,
              message: "Debe tener 5 caracteres como mínimo",
            },
          })}
        />
        {errors["condition"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["condition"]["message"] as string}
          </p>
        )}
      </div>
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="price">
          Price (€)
        </label>
        <input
          type="number"
          id="price-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("price", {
            required: "Este campo es obligatorio",
          })}
        />
        {errors["price"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["price"]["message"] as string}
          </p>
        )}
      </div>
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="town">
          Town/Pueblo
        </label>
        <input
          type="text"
          id="town-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("town", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener 2 caracteres como mínimo",
            },
          })}
        />
        {errors["town"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["town"]["message"] as string}
          </p>
        )}
      </div>
      <div tw="flex flex-col gap-2">
        <label tw="text-lg text-black" htmlFor="province">
          Province
        </label>
        <input
          type="text"
          id="province-input"
          tw="bg-white text-black transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg"
          {...register("province", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 5,
              message: "Debe tener 5 caracteres como mínimo",
            },
          })}
        />
        {errors["province"] && (
          <p tw="bg-[#e63946] text-white transition-all py-3 px-3 border-b-2 border-slate-200 shadow-md rounded-lg">
            <span tw="text-base">
              <BiInfoCircle />
            </span>
            {errors["province"]["message"] as string}
          </p>
        )}
      </div>



      <AnimatePresence>
        {title && (
          <SubmitButton submitted={isSubmitSuccessful}>
            {isSubmitting && <p>Enviando...</p>}
            Submit {title}
            <RiSendPlaneFill />
          </SubmitButton>
        )}
      </AnimatePresence>
    </motion.form>
  );
};