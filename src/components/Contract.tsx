import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useJobContractContract } from "../hooks/useJobContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";


export function Contract() {
    console.log("TEST1!!!");
    const { connected } = useTonConnect();
    console.log("TEST2!!!");
    console.log(useJobContractContract("kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP","kQCxPXjtEBNbDeV1EbruV9FIRJsh6FUQ3Z-sE-GqDrzL6kcf","kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP",10n));
    return( <Card title="Jetton"> <h3>TEST</h3></Card>);
    // return (
    //   <Card title="Jetton">
    //     <FlexBoxCol>
    //       <h3>Faucet Jetton</h3>
    //       <FlexBoxRow>
    //         Wallet
    //         <Ellipsis>{jettonWalletAddress}</Ellipsis>
    //       </FlexBoxRow>
    //       <FlexBoxRow>
    //         Balance
    //         <div>{balance ?? "Loading..."}</div>
    //       </FlexBoxRow>
    //       <Button
    //         disabled={!connected}
    //         onClick={async () => {
    //           mint();
    //         }}
    //       >
    //         Get jettons from faucet
    //       </Button>
    //     </FlexBoxCol>
    //   </Card>
    // );
  }