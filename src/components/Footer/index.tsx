type Props = {
  endereco: string;
};

const Footer: React.FC<Props> = ({ endereco }) => {
  return (
    <div
      className="
      flex
      items-center
      justify-end
      w-full
      h-20
      px-4"
    >
      <span className="flex items-center justify-center w-full h-10 text-xs text-gray-400 pl-4 ">
        {endereco}
      </span>
    </div>
  );
};

export default Footer;
