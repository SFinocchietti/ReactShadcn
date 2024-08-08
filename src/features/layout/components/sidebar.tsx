import { Link, useLocation } from "@tanstack/react-router";
import { AlignJustify, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/typography/typography";
import { navigationProps } from "./sidebar-navigation";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

interface ConfigNavigation {
  id: string;
  Enabled?: boolean;
  DisabledActions?: string[];
}

const isModuleEnabled = (
  itemId: string,
  config: ConfigNavigation[],
): boolean => {
  const item = config.find((i: ConfigNavigation) => i.id === itemId);
  return item ? item.Enabled ?? true : true;
};

const isActionEnabled = (
  itemId: string,
  id: string,
  config: ConfigNavigation[],
): boolean => {
  const action = config.find((i: ConfigNavigation) => i.id === itemId);
  return action ? !action.DisabledActions?.includes(id) : true;
};

const getActiveActionId = (path: string) => {
  let id = null;
  navigationProps.map((item) => {
    if (item.to && path.includes(item.to)) {
      id = item.id;
    }
    if (item.subActions != null) {
      item.subActions.map((subItem) => {
        if (subItem.subActions != null) {
          subItem.subActions.map((leafItem) => {
            if (leafItem.to && path.includes(leafItem.to)) {
              id = item.id;
            }
          });
        } else {
          if (subItem.to && path.includes(subItem.to)) {
            id = item.id;
          }
        }
      });
    }
  });
  return id;
};

const generarSidebar = (
  config: ConfigNavigation[],
  activeActionId: string | null,
) => (
  <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            to="/"
            className="group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:size-8 md:text-base"
          >
            <Landmark className="size-4 transition-all group-hover:scale-110" />
            <span className="sr-only">BNA</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="w-full bg-secondary px-4 text-sm"
        >
          <Typography variant="regularText">Inicio</Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    {navigationProps
      .filter((item) => isModuleEnabled(item.id, config))
      .map((item) =>
        item.subActions ? (
          <TooltipProvider
            delayDuration={200}
            skipDelayDuration={0}
            key={item.id}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8 ${item.id == activeActionId ? "bg-secondary text-accent-foreground" : "text-muted-foreground"}`}
                >
                  <Link to={item.to}>
                    {item.icon ? item.icon : <AlignJustify />}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="max-h-screen w-full overflow-y-auto bg-secondary px-4 text-sm"
              >
                <div className="flex flex-col">
                  <Typography
                    variant="largeMutedText"
                    className="flex justify-center pb-1"
                  >
                    {item.name}
                  </Typography>
                  {item.subActions
                    .filter((subItem) =>
                      isActionEnabled(item.id, subItem.id, config),
                    )
                    .map((subItem, subIndex) =>
                      subItem.subActions ? (
                        <>
                          <div key={subItem.id} className="size-full text-left">
                            <Typography variant="regularText">
                              {subItem.name}
                            </Typography>
                            <div className="flex flex-col text-left">
                              {subItem.subActions
                                .filter((leafItem) =>
                                  isActionEnabled(item.id, leafItem.id, config),
                                )
                                .map((leafItem) => (
                                  <Button
                                    variant="outline"
                                    key={leafItem.id}
                                    className="my-2 h-full max-w-sm text-left"
                                  >
                                    <Link
                                      to={leafItem.to}
                                      className="block w-full"
                                    >
                                      <Typography variant="regularText">
                                        {leafItem.name}
                                      </Typography>
                                      {leafItem.description ? (
                                        <div className="whitespace-normal pt-0.5">
                                          <Typography variant="mutedText">
                                            {leafItem.description}
                                          </Typography>
                                        </div>
                                      ) : (
                                        <></>
                                      )}
                                    </Link>
                                  </Button>
                                ))}
                            </div>
                          </div>
                          {subIndex !== item.subActions!.length - 1 && (
                            <Separator className="my-3 bg-primary" />
                          )}
                        </>
                      ) : (
                        <Button
                          variant="outline"
                          key={subItem.id}
                          className="my-2 h-full max-w-sm text-left"
                        >
                          <Link to={subItem.to} className="block w-full">
                            <Typography variant="regularText">
                              {subItem.name}
                            </Typography>
                            {subItem.description ? (
                              <div className="whitespace-normal pt-0.5">
                                <Typography variant="mutedText">
                                  {subItem.description}
                                </Typography>
                              </div>
                            ) : (
                              <></>
                            )}
                          </Link>
                        </Button>
                      ),
                    )}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <TooltipProvider
            delayDuration={200}
            skipDelayDuration={0}
            key={item.id}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`flex size-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:size-8 ${item.id == activeActionId ? "bg-secondary text-accent-foreground" : "text-muted-foreground"}`}
                >
                  <Link to={item.to}>
                    {item.icon ? item.icon : <AlignJustify />}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="w-full bg-secondary px-4 text-sm"
              >
                <Typography variant="regularText">{item.name}</Typography>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
      )}
  </nav>
);

const Sidebar = () => {
  const [config, setConfig] = useState<ConfigNavigation[]>([]);

  useEffect(() => {
    fetch("/configSite.json")
      .then((response) => response.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      .then((data) => setConfig(data.Modulos))
      .catch((error) => console.error("Error fetching config:", error));
  }, []);

  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const [sidebar, setSidebar] = useState<JSX.Element>(
    generarSidebar(config, getActiveActionId(pathname)),
  );

  useEffect(() => {
    setSidebar(generarSidebar(config, getActiveActionId(pathname)));
  }, [config, pathname]);

  return sidebar;
};

export default Sidebar;
