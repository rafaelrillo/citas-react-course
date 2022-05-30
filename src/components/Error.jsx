const Error = ({children}) => {
  return (
    <div className="bg-red-100 text-red-700 text-center p-3 font-bold uppercase mb-3 rounded-md">
      {children}
    </div>
  );
};

export default Error;
