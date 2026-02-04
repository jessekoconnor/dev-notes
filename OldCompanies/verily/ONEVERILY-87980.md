# ONEVERILY-87980: Investigate why monthly values are all 0 on web

Seems like this is about incorrect setup for barChart

# We should

```javascript
const barData: BarDataType[] = dataPoints.map(d => ({
    name: d.label,
    steps: d.yValue,
    dataDate: d.xValue
}));
```

# What we know

Data looks like this:

```json

```

We map things like this:

```javascript
const dataPoints = [{
    "xValue": "2025-20-03T00:00:00.000Z",
    "yValue": 5258,
    "label": "Fri"
}];

const barData: BarDataType[] = dataPoints.map(d => ({
    name: d.label,
    steps: d.yValue,
}));

<SafeBarChartWrapper
    data={barData}
    colors={barColors}
    dataKeyXAxis="name"
    height={height}
    width={width}
    hideTooltip={hideTooltip}
    yAxisProps={{
        domain: [0, 1.125 * maxY],
    }}
    title={graphTitle}
    hideAxis={hideAxis}
/>
```

But in the examples they do it like this:

```javascript
const monthData: BarDataType[] = [{
    name: '1',
    steps: 8200,
    dataDate: new Date('March 1, 2025'),
}]


```