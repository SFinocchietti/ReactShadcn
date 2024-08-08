//import { BookmarkCheck, Search } from "lucide-react";

import {
  BadgeDollarSignIcon,
  BoneIcon,
  ShoppingCart,
  StoreIcon,
} from "lucide-react";

interface NavigationSchema {
  id: string;
  name: string;
  to?: string;
  icon?: JSX.Element;
  description?: string;
  subActions?: NavigationSchema[];
}
// ICON PROPS: size, strokeWidth, color, absoluteStrokeWidth
// https://lucide.dev/guide/packages/lucide-react#props
// pasar todo a un componente llamado Sidebar y eliminar los archivos que no son necesarios
export const navigationProps: NavigationSchema[] = [
  {
    id: "productos",
    name: "Productos",
    to: "/inicio",
    icon: <BoneIcon />,
    subActions: [
      {
        id: "correas",
        name: "Correas",
        to: "",
      },
      {
        id: "pretales",
        name: "Pretales",
        to: "",
      },
    ],
  },
  {
    id: "locales",
    name: "Locales",
    to: "/local",
    icon: <StoreIcon />,
    subActions: [
      {
        id: "franquicias",
        name: "Franquicias",
        to: "/franquicia",
      },
    ],
  },
  {
    id: "pagos",
    name: "Pagos",
    to: "/pago",
    icon: <BadgeDollarSignIcon />,
    subActions: [
      {
        id: "tarjetas",
        name: "Tarjetas",
        subActions: [
          {
            id: "credito",
            name: "Credito",
            to: "/tarjetaCredito",
          },
          {
            id: "debito",
            name: "Debito",
            to: "/tarjetaDebito",
          },
        ],
      },
      {
        id: "efectivo",
        name: "Efectivo",
        description: "Directamente en el local.",
      },
      {
        id: "mercadoPago",
        name: "MercadoPago",
        subActions: [
          {
            id: "transferecia",
            name: "Trasferencia",
            to: "",
          },
          {
            id: "qr",
            name: "Qr",
            to: "/mercadoPago",
          },
        ],
      },
      {
        id: "cripto",
        name: "Cripto",
      },
    ],
  },
  {
    id: "pedidos",
    name: "Pedidos",
    to: "/carrito",
    icon: <ShoppingCart />,
  },
  // {
  //   id: "dashboard",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <BookmarkCheck />,
  // },
  // {
  //   id: "modulo-task",
  //   name: "Task",
  //   icon: <Search strokeWidth={2} size={24} />,
  //   to: "/tasks",
  //   subActions: [
  //     {
  //       id: "task-index",
  //       name: "List Tasks",
  //       to: "/tasks",
  //       description: "Here's a list of your tasks!",
  //     },
  //     {
  //       id: "task-add",
  //       name: "Add Task",
  //       to: "/tasks/add",
  //       description: "Add a new Task!",
  //     },
  //   ],
  // },
];
