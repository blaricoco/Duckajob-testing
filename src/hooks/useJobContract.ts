import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "ton-core";
import JobContract from "../contracts/jobContract";
import { useQuery } from "@tanstack/react-query";


export function useJobContractContract(seller: string, buyer: string, dispute_resolver: string, contract_price: bigint) {
    const { wallet, sender } = useTonConnect();
    const { client } = useTonClient();

    const jobContract = useAsyncInitialize(async () => {
        if (!client || !wallet) return;

        const contract = 
            JobContract.fromInit(
            Address.parse(seller),
            Address.parse(buyer),
            Address.parse(dispute_resolver),
            contract_price
            );
        
        console.log((await contract).getDeployedTime);
        console.log("TEST!!!");
        // const contract = new JobContract(
        //   Address.parse("EQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_b7Y") // replace with your address from tutorial 2 step 8
        // );
        //return (await contract).getDeployedTime;

    //     return client.open(contract) as OpenedContract<JobContract>;
    //   }, [client, wallet]);
    return {
        mint: () => {
            contract;
        } 
      };
})};

