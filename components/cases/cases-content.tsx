"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, User, Scale, FileText, Gavel } from "lucide-react"
import { useState } from "react"

const cases = [
  {
    id: "คด. 001/2567",
    title: "คดีพิพาทสัญญาซื้อขายที่ดิน",
    client: "นายสมชาย ใจดี",
    type: "คดีแพ่ง",
    status: "กำลังพิจารณา",
    court: "ศาลแพ่งกรุงเทพใต้",
    nextHearing: "15 ก.พ. 2568",
  },
  {
    id: "คด. 002/2567",
    title: "คดีอาญาฉ้อโกงประชาชน",
    client: "บริษัท รุ่งเรือง จำกัด",
    type: "คดีอาญา",
    status: "รอนัดสืบพยาน",
    court: "ศาลอาญากรุงเทพใต้",
    nextHearing: "20 ก.พ. 2568",
  },
  {
    id: "คด. 003/2567",
    title: "คดีหย่าและแบ่งสินสมรส",
    client: "นางสาวมาลี สวยงาม",
    type: "คดีครอบครัว",
    status: "เสร็จสิ้น",
    court: "ศาลเยาวชนและครอบครัว",
    nextHearing: "-",
  },
  {
    id: "คด. 004/2567",
    title: "คดีพิพาทแรงงานเลิกจ้างไม่เป็นธรรม",
    client: "นายวิชัย ขยันงาน",
    type: "คดีแรงงาน",
    status: "กำลังพิจารณา",
    court: "ศาลแรงงานกลาง",
    nextHearing: "28 ก.พ. 2568",
  },
  {
    id: "คด. 005/2567",
    title: "คดีละเมิดลิขสิทธิ์งานออกแบบ",
    client: "บริษัท ครีเอทีฟ ดีไซน์ จำกัด",
    type: "คดีทรัพย์สินทางปัญญา",
    status: "รอนัดสืบพยาน",
    court: "ศาลทรัพย์สินทางปัญญา",
    nextHearing: "5 มี.ค. 2568",
  },
]

const statusVariant = (status: string) => {
  switch (status) {
    case "เสร็จสิ้น":
      return "secondary"
    case "กำลังพิจารณา":
      return "default"
    default:
      return "outline"
  }
}

const summary = [
  { label: "คดีทั้งหมด", value: "48", icon: FileText },
  { label: "กำลังพิจารณา", value: "23", icon: Scale },
  { label: "รอนัดสืบพยาน", value: "12", icon: Gavel },
  { label: "เสร็จสิ้น", value: "13", icon: Calendar },
]

export function CasesContent() {
  const [filter, setFilter] = useState("all")

  const filteredCases =
    filter === "all"
      ? cases
      : filter === "active"
        ? cases.filter((c) => c.status !== "เสร็จสิ้น")
        : cases.filter((c) => c.status === "เสร็จสิ้น")

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((item, index) => (
          <Card
            key={item.label}
            className="p-4 hover:shadow-lg transition-all duration-300 animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="ค้นหาคดีความ..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            ตัวกรอง
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            วันนัด
          </Button>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
          ทั้งหมด ({cases.length})
        </Button>
        <Button variant={filter === "active" ? "default" : "outline"} onClick={() => setFilter("active")} size="sm">
          กำลังดำเนินการ ({cases.filter((c) => c.status !== "เสร็จสิ้น").length})
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
          size="sm"
        >
          เสร็จสิ้น ({cases.filter((c) => c.status === "เสร็จสิ้น").length})
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredCases.map((caseItem, index) => (
          <Card
            key={caseItem.id}
            className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">{caseItem.id}</span>
                    <Badge variant="outline" className="text-xs">
                      {caseItem.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground text-balance">{caseItem.title}</h3>
                </div>
                <Badge variant={statusVariant(caseItem.status)} className="shrink-0">
                  {caseItem.status}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {caseItem.client}
                </span>
                <span className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4" />
                  {caseItem.court}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  นัดถัดไป: {caseItem.nextHearing}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
