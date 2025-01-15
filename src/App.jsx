import './App.css';
import { MonthBarChart } from '@/components/ui/monthBarChart';
import { ProjectedUsageChart } from '@/components/ui/projectedUsageChart';
import { CurrentUsageChart } from '@/components/ui/currentUsageChart';
import { DayBarChart } from '@/components/ui/dayBarChart ';
import { Separator } from '@/components/ui/separator';
import { BarChartComponent } from '@/components/ui/barChartComponent';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function App() {
  return (
    <div className="w-screen h-screen p-[20px] overflow-hidden box-border">
      <div className="flex h-5 items-center space-x-4 ">
        <div>전기</div>
        <Separator orientation="vertical" />
        <div>가스</div>
        <Separator orientation="vertical" />
        <div>수도</div>
      </div>

      <div className="flex flex-col w-full h-full ">
        <div className="flex w-full h-1/2 mt-4 gap-5">
          <div className="flex">
            <CurrentUsageChart className="" />
            <ProjectedUsageChart />
          </div>

          <div className="flex flex-col">
            <Table className="border w-[450px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">
                    <Select>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="최근부과월" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">2024년 12월</SelectItem>
                        <SelectItem value="dark">2024년 11월</SelectItem>
                        <SelectItem value="system">2024년 10월</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableHead>
                  <TableHead>전월대비</TableHead>
                  <TableHead>전년대비</TableHead>
                  {/* <TableHead className="text-right">Amount</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableHead className="font-medium w-[150px]">
                    사용금액
                  </TableHead>
                  <TableCell>🔺33</TableCell>
                  <TableCell>➖</TableCell>
                  {/* <TableCell className="text-right"></TableCell> */}
                </TableRow>
                <TableRow>
                  <TableHead className="w-[150px]">사용량</TableHead>
                  <TableCell>🔺217</TableCell>
                  <TableCell>➖</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-[50px] mt-2">모두보기</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>전체 사용량</DialogTitle>
                  <DialogDescription>
                    지금까지의 사용량과 사용요금이 보여지는 곳
                  </DialogDescription>
                </DialogHeader>

                <Table className="border  text-center">
                  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                  <TableHeader>
                    <TableRow className="">
                      <TableHead>월</TableHead>
                      <TableHead>사용량</TableHead>
                      <TableHead>사용요금</TableHead>
                      {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 12월
                      </TableHead>
                      <TableCell>167</TableCell>
                      <TableCell>26,350</TableCell>
                      {/* <TableCell className="text-right"></TableCell> */}
                    </TableRow>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 11월
                      </TableHead>
                      <TableCell>208</TableCell>
                      <TableCell>34,210</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 10월
                      </TableHead>
                      <TableCell>208</TableCell>
                      <TableCell>34,210</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 9월
                      </TableHead>
                      <TableCell>208</TableCell>
                      <TableCell>34,210</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 8월
                      </TableHead>
                      <TableCell>208</TableCell>
                      <TableCell>34,210</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead className="font-medium w-[150px]">
                        2024년 7월
                      </TableHead>
                      <TableCell>208</TableCell>
                      <TableCell>34,210</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <DialogFooter>
                  페이지네이션 영역
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* 오른쪽- 원형 그래프 2개 */}
        </div>

        <Card className="h-1/2">
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger value="account" className="w-[140px]">
                월별
              </TabsTrigger>
              <TabsTrigger value="password" className="w-[140px]">
                일별
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              여기는 월별 사용량이 보여지는 곳
              <MonthBarChart />
            </TabsContent>
            <TabsContent value="password">
              일별 전기 사용량이 보여지는 곳
              <DayBarChart />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

export default App;
