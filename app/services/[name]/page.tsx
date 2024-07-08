export default function Page({ params }: { params: { name: string } }) {
  console.log(params);
  return <div>My Post: {params.name}</div>;
}
