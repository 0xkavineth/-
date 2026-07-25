import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailCheck } from "lucide-react"
import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card className="border-border">
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <MailCheck className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl">สมัครสมาชิกสำเร็จ</CardTitle>
            <CardDescription>กรุณายืนยันอีเมลของคุณ</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              เราได้ส่งลิงก์ยืนยันไปยังอีเมลของคุณแล้ว กรุณาคลิกลิงก์ในอีเมลเพื่อเปิดใช้งานบัญชีก่อนเข้าสู่ระบบ
            </p>
            <Button asChild className="w-full">
              <Link href="/auth/login">ไปหน้าเข้าสู่ระบบ</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
