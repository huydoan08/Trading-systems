'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Check, Copy } from 'lucide-react'
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { allData } from './data'

export  interface Trade {
  id: string
  date: string
  symbol: string
  timeframe: string
  stoploss: string
  result: 'WIN' | 'LOSS'
  ratio: string
  pnl: string
}

export default function TradeJournal() {
  const { theme } = useTheme()
  const [trades, setTrades] = useState<Trade[]>(allData)

  const [copied, setCopied] = useState(false)

  const handleCopyData = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(trades, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const updateTrade = (id: string, field: keyof Trade, value: string) => {
    setTrades(trades.map(trade =>
      trade.id === id ? { ...trade, [field]: value } : trade
    ))
  }

  const addTrade = () => {
    const newTrade: Trade = {
      id: Date.now().toString(),
      date: '',
      symbol: '',
      timeframe: '',
      stoploss: '',
      result: 'WIN',
      ratio: '',
      pnl: '',
    }
    setTrades([...trades, newTrade])
  }

  const deleteTrade = (id: string) => {
    setTrades(trades.filter(trade => trade.id !== id))
  }

  // Analytics calculations
  const calculateAnalytics = () => {
    const totalTrades = trades.length
    const wins = trades.filter(t => t.result === 'WIN').length
    const losses = trades.filter(t => t.result === 'LOSS').length
    const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) : 0

    const pnlValues = trades
      .map(t => {
        const pnlStr = t.pnl.replace('%', '').replace('+', '')
        return parseFloat(pnlStr) || 0
      })
      .filter(v => !isNaN(v))

    const totalPnL = pnlValues.reduce((a, b) => a + b, 0)
    const avgPnL = pnlValues.length > 0 ? (totalPnL / pnlValues.length).toFixed(2) : 0

    return { totalTrades, wins, losses, winRate, totalPnL, avgPnL }
  }

  // Chart data for win/loss
  const getWinLossData = () => {
    const analytics = calculateAnalytics()
    return [
      { name: 'Wins', value: analytics.wins },
      { name: 'Losses', value: analytics.losses },
    ]
  }

  // Chart data for PnL trend
  const getPnLTrendData = () => {
    return trades.map((trade, index) => ({
      date: trade.date || `Trade ${index + 1}`,
      pnl: parseFloat(trade.pnl.replace('%', '').replace('+', '')) || 0,
      symbol: trade.symbol,
    }))
  }

  const analytics = calculateAnalytics()
  const COLORS = ['#10b981', '#ef4444']
  const textColor = theme === "dark" ? "#fff" : "#000"
  const bgColor = theme === "dark" ? "#1f2937" : "#ffffff"
  const gridColor = theme === "dark" ? "#4b5563" : "#e5e7eb"
  const textColorClass = theme === "dark" ? "text-gray-100" : "text-gray-900"
  const secondaryTextColor = theme === "dark" ? "text-gray-400" : "text-gray-600"

  return (
    <ContentLayout title="Chiến lược giao dịch">
      <div className={`w-full mx-auto p-6 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
        {/* Header */}
        <h1 className={`text-2xl font-bold mb-6 ${textColorClass}`}>Trade Journal</h1>

        {/* Analytics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardContent className="p-4">
              <p className={`text-sm ${secondaryTextColor}`}>Total Trades</p>
              <p className={`text-2xl font-bold ${textColorClass}`}>{analytics.totalTrades}</p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardContent className="p-4">
              <p className={`text-sm ${secondaryTextColor}`}>Win Rate</p>
              <p className="text-2xl font-bold text-green-500 dark:text-green-400">{analytics.winRate}%</p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardContent className="p-4">
              <p className={`text-sm ${secondaryTextColor}`}>Total PnL</p>
              <p className={`text-2xl font-bold ${analytics.totalPnL >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {analytics.totalPnL >= 0 ? '+' : ''}{analytics.totalPnL.toFixed(2)} (R)
              </p>
            </CardContent>
          </Card>
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardContent className="p-4">
              <p className={`text-sm ${secondaryTextColor}`}>Avg PnL</p>
              <p className={`text-2xl font-bold ${parseFloat(analytics.avgPnL as string) >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                {parseFloat(analytics.avgPnL as string) >= 0 ? '+' : ''}{analytics.avgPnL} (R)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Win/Loss Pie Chart */}
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg ${textColorClass}`}>Win/Loss Ratio</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={getWinLossData()}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {getWinLossData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: bgColor, border: `1px solid ${gridColor}`, color: textColor }} />
                  <Legend wrapperStyle={{ paddingTop: '20px', color: textColor }} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* PnL Trend Chart */}
          <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg ${textColorClass}`}>PnL Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={getPnLTrendData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis dataKey="date" stroke={textColor} tick={{ fill: textColor }} />
                  <YAxis stroke={textColor} tick={{ fill: textColor }} />
                  <Tooltip contentStyle={{ backgroundColor: bgColor, border: `1px solid ${gridColor}`, color: textColor }} />
                  <Legend wrapperStyle={{ color: textColor }} />
                  <Line
                    type="monotone"
                    dataKey="pnl"
                    stroke="#3b82f6"
                    dot={{ fill: '#3b82f6' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} mb-8`}>
          <CardHeader className="pb-3">
            <CardTitle className={`text-lg ${textColorClass}`}>Trade History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`border-b ${theme === "dark" ? "border-gray-600 bg-gray-700/50" : "border-gray-300 bg-gray-100"}`}>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>STT</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>Date</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>Symbol</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>TimeFrame</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>Stoploss</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>Result</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>R:R</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>PnL</th>
                    <th className={`px-4 py-3 text-left text-sm font-semibold ${textColorClass}`}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((trade, idx) => (
                    <tr key={trade.id} className={`border-b ${theme === "dark" ? "border-gray-700 hover:bg-gray-800/50" : "border-gray-200 hover:bg-gray-50"}`}>
                      <td className="px-4 py-3">
                       <span>{idx + 1}</span>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.date}
                          onChange={(e) => updateTrade(trade.id, 'date', e.target.value)}
                          placeholder="MM/DD"
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.symbol}
                          placeholder="BTC"
                          onChange={(e) => updateTrade(trade.id, 'symbol', e.target.value)}
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.timeframe}
                          placeholder="H4"
                          onChange={(e) => updateTrade(trade.id, 'timeframe', e.target.value)}
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.stoploss}
                          placeholder='10'
                          onChange={(e) => updateTrade(trade.id, 'stoploss', e.target.value)}
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={trade.result}
                          onChange={(e) => updateTrade(trade.id, 'result', e.target.value as 'WIN' | 'LOSS')}
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        >
                          <option value="WIN">WIN</option>
                          <option value="LOSS">LOSS</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.ratio}
                          onChange={(e) => updateTrade(trade.id, 'ratio', e.target.value)}
                          placeholder="1:3"
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={trade.pnl}
                          onChange={(e) => updateTrade(trade.id, 'pnl', e.target.value)}
                          placeholder="+2"
                          className={`rounded px-2 py-1 border focus:outline-none w-full text-sm ${theme === "dark" ? "bg-gray-800 text-gray-100 border-gray-600 focus:border-gray-400" : "bg-gray-50 text-gray-900 border-gray-300 focus:border-gray-400"}`}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteTrade(trade.id)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Add Button */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={addTrade}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
          >
            + Add Trade
          </button>
        </div>

        {/* Data Display */}
        <Card className={`${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className={`text-lg ${textColorClass}`}>Data Object</CardTitle>
            <button
              onClick={handleCopyData}
              className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors ${copied
                ? 'bg-green-600 text-white'
                : theme === "dark" ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </CardHeader>
          <CardContent>
            <pre className={`text-xs overflow-auto max-h-48 rounded border ${theme === "dark" ? "text-gray-300 bg-gray-900 border-gray-700" : "text-gray-700 bg-gray-50 border-gray-300"} p-4`}>
              {JSON.stringify(trades, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>


  )
}
