import { useWeb3 } from "../../hooks";

const Introduce = () => {
  const { mint } = useWeb3();

  const handleClick = (tokenId: number) => {
    mint(tokenId);
  };

  return (
    <div className="web3-block introduce-block">
      <h1>Welcome to the DApp!</h1>
      <p>
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem
        ipsum dolor sit amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
        amet Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum
        dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
        Lorem ipsum dolor sit amet
      </p>
      <button onClick={() => handleClick(3)}>MintNFT</button>
    </div>
  );
};

export default Introduce;
