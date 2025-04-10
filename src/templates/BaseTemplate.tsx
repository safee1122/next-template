export const BaseTemplate = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto">
        <main>{props.children}</main>
      </div>
    </div>
  );
};
