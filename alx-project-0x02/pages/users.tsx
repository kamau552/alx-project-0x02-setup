import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </>
  );
}
