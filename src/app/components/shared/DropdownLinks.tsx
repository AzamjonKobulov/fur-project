import DropdownItem from "./DropdownItem";

const DropdownLinks = ({ links, pathname, isScrolled }) => {
  return (
    <ul className="hidden xl:flex items-center gap-7 3xl:gap-12 text-sm 3xl:text-base">
      {links.map(({ name, options }) => (
        <DropdownItem
          key={name}
          name={name}
          options={options}
          pathname={pathname}
          isScrolled={isScrolled}
        />
      ))}
    </ul>
  );
};

export default DropdownLinks;
