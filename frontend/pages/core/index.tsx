import { Counter } from "@/components/core/Counter";
import { Title } from "@/components/core/Title";

const CorePage = () => {
  return (
    <section tw="flex flex-col flex-none justify-center items-center gap-4">
      <Title>Pueblar - Vente al Pueblo</Title>
      <p tw="text-center text-lg font-bold">Esta es la pagina de CORE</p>
      <Counter />
    </section>
  );
};

export default CorePage;
