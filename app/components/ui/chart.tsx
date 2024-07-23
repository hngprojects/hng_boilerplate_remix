<<<<<<< HEAD
"use client";

import { cn } from "app/lib/utils/cn";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProperties = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProperties | undefined>(
  undefined,
);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
=======
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "app/lib/utils/cn"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
<<<<<<< HEAD
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ id, className, children, config, ...properties }, reference) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replaceAll(":", "")}`;
=======
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
<<<<<<< HEAD
        ref={reference}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...properties}
=======
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
<<<<<<< HEAD
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => {
    config.theme || config.color;
    console.log(_);
  });

  if (colorConfig.length === 0) {
    return;
=======
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
<<<<<<< HEAD
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : undefined;
  })
  .join("\n")}
}
`,
=======
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
          )
          .join("\n"),
      }}
    />
<<<<<<< HEAD
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;
=======
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
<<<<<<< HEAD
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
=======
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
<<<<<<< HEAD
    reference,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;
=======
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
<<<<<<< HEAD
        );
      }

      if (!value) {
        return;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
=======
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
<<<<<<< HEAD
    ]);

    if (!active || !payload?.length) {
      return;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={reference}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {nestLabel ? undefined : tooltipLabel}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
=======
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
<<<<<<< HEAD
                  indicator === "dot" && "items-center",
=======
                  indicator === "dot" && "items-center"
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
<<<<<<< HEAD
                            },
=======
                            }
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
<<<<<<< HEAD
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : undefined}
=======
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
<<<<<<< HEAD
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;
=======
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
<<<<<<< HEAD
      hideIcon?: boolean;
      nameKey?: string;
=======
      hideIcon?: boolean
      nameKey?: string
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
<<<<<<< HEAD
    reference,
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return;
=======
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
    }

    return (
      <div
<<<<<<< HEAD
        ref={reference}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
=======
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

          return (
            <div
              key={item.value}
              className={cn(
<<<<<<< HEAD
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
=======
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
<<<<<<< HEAD
          );
        })}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";
=======
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
<<<<<<< HEAD
  key: string,
) {
  if (typeof payload !== "object" || payload === undefined) {
    return;
=======
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
<<<<<<< HEAD
    payload.payload !== undefined
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;
=======
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
<<<<<<< HEAD
    configLabelKey = payload[key as keyof typeof payload] as string;
=======
    configLabelKey = payload[key as keyof typeof payload] as string
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
<<<<<<< HEAD
    ] as string;
=======
    ] as string
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
  }

  return configLabelKey in config
    ? config[configLabelKey]
<<<<<<< HEAD
    : config[key as keyof typeof config];
=======
    : config[key as keyof typeof config]
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
<<<<<<< HEAD
};
=======
}
>>>>>>> 7fedd62 (feat: #41 - user dashboard page added)
