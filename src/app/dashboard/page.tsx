import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";
import { CreditCard, DollarSign, Package } from "lucide-react";

export default async function AdminPage() {

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 px-4 py-8 pt-6">
        <Heading title="Dashbord" description="Overview of your dashboard" />
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Category</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">{`1222`}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">News</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">{12}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Store Branch
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold">{122}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
