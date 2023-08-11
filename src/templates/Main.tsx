import type { ReactNode } from 'react';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">Header Here</header>

      <main className="content py-5 text-xl">{props.children}</main>

      <header className="border-b border-gray-300">Footer Here</header>
    </div>
  </div>
);

export { Main };
