import { Input, TextArea } from "@/shared/ui";

function MainPage() {
  return (
    <div style={{ margin: "10px 10px" }}>
      <Input placeholder="имя" />
      <TextArea />
    </div>
  );
}

export { MainPage };
