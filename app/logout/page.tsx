"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogOut, Loader2 } from "lucide-react"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { createClient } from "@/lib/supabase/client"

export default function LogoutPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogout = async () => {
    const supabase = createClient()
    setIsLoggingOut(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push("/auth/login")
      router.refresh()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "ออกจากระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 lg:p-6 lg:ml-64">
        <Header title={""} description={""} />

        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
          <Card className="p-8 max-w-md w-full text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <LogOut className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">ออกจากระบบ</h1>
              <p className="text-muted-foreground">คุณแน่ใจว่าจะอออกจากระบบ ใช่หรือไม่?</p>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => router.back()}
                disabled={isLoggingOut}
              >
                ยกเลิก
              </Button>
              <Button
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    กำลังออกจากระบบ...
                  </span>
                ) : (
                  "ออกจากระบบ"
                )}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
