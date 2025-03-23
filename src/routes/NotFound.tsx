import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import image from "./../core/images/404_Page_Not_Found.png";
import { Image } from "@heroui/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Image src={image} width={400} />
      <h1 className="text-2xl mb-4">Página no encontrada</h1>
      <p className="text-muted-foreground mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Button color="primary" variant="ghost" as={Link} href="/">
        Volver a la página principal
      </Button>
    </div>
  );
}
