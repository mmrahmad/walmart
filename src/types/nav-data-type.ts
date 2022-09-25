interface NavDataType {
  id: string;
  title: string;
  slug: string;
  icon?: string;
  children?: NavDataType[];
}
export default NavDataType;
