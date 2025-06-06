import { RewardClient } from "./RewardClient";

export default async function RewardPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const params = await searchParams;
  const amountParam = params.amount || "150";
  const amount = typeof amountParam === 'string' ? amountParam : "150";
  
  return <RewardClient amount={amount} />;
} 