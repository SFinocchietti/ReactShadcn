import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const credito = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      <h1>Pagos con tarjeta de credito</h1>
      <Card>
        <CardHeader>
          <CardTitle>Tarjeta de Crédito</CardTitle>
          <Input
            placeholder="Nombre y Apellido del titular"
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Marca de tarjeta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Visa</SelectItem>
              <SelectItem value="dark">MasterCard</SelectItem>
              <SelectItem value="system">American Express</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <CardHeader>
          <CardTitle>Numeros de tarjeta de credito</CardTitle>
          <InputOTP maxLength={9}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
              <InputOTPSlot index={8} />
            </InputOTPGroup>
          </InputOTP>
        </CardHeader>
      </Card>
    </div>
  );
};

export default credito;
