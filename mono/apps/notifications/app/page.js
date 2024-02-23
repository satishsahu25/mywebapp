'use client'
import { useRouter } from 'next/navigation';
export default async function Index() {
  const router = useRouter();
  return (
    <div>
      <p>This is from practice page</p>

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </div>
  );
}
