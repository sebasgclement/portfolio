// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Sebastian Clement. Todos los derechos
      reservados.
    </footer>
  );
}
