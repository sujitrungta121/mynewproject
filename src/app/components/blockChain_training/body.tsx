import Image from "next/image";


export default function Body(){
    return (
        <main className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center pt-4">
            <h2 className="text-3xl font-bold text-center">BlockChain Training</h2>
            <span className=" text-center">Come and learn about blockchain training</span>
            </div>

            <Image alt="no image" src="/courses-images/block-chain.jpg" className="h-[40rem]"  width={2000} height={500}/>

            <div className="flex flex-col 2xl:pl-24 xl:pl-24 lg:pl-24 md:pl-24 sm:pl-4 pl-4  2xl:pr-24 xl:pr-24 lg:pr-24 md:pr-24 sm:pr-2 pr-2 2xl:pt-16 xl:pt-16 lg:pt-16 md:pt-16 sm:pt-4 pt-4 2xl:pb-16 xl:pb-16 lg:pb-16 md:pb-16 sm:pb-4 pb-4 gap-4">
                <span className="text-2xl font-bold" >Introduction</span>
                <p className="text-lg">Many people thinks it as a technology behind Bitcoin only, but blockchains potential uses extend far beyond crypto currencies.
Blockchain technolgy is a decentralized, distributed and public digital ledger which is use to record digital transactions between computers so that any record cannot be change at any circumstances, without the modification of all subsequent blocks.This process allows participants of transaction to verify and audit independently .


</p>
<ul>
    <li>Blocks : It hold batches of valid transactions that are hashed and encoded into a tree</li>
    <li>Decentralization : Decentralization of blockchain technology means that it do not rely on any control by a central point.</li>
    <li>Openness : This technolgy is open to public and blocks can be seen by any individuals.</li>
    <li>Permissionless : The best advantage of public , open or Permissionless blockchain network is no extra access control is required.</li>
</ul>

<div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">How to Implement?</span>
                <p className="text-lg">Blockchain technology can be integrated into multiple areas. The primary use of blockchains today is as a distributed ledger for cryptocurrencies, most notably bitcoin. There are a few operational products maturing from proof of concept
Blockchain technology can be use into many fields now a days , but its primary use is as distributed ledger for crypto currencies . The best example of blockchain technology can be seen into Bitcoin crypto currency.</p>
            </div>
            </div>

           
        </main>
    )
}