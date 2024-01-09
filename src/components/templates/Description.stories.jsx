import Description from "./Description";

export default {
  title: "Components/Templates/Description",
  component: Description,
};

export const DescriptionTemplate = (args) => <Description {...args} />;

DescriptionTemplate.args = {
  children: "Description",
};
