import { AuthService } from './auth.service';
import { Controller, Param, HttpException, HttpStatus, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get(':address')
    async getSignMessage(@Param() params) {
        const address = params.address;    
    
        if (!/^(0-9a-fA-F){40}$/.test(address)) {
            throw new HttpException('wrong address', HttpStatus.BAD_REQUEST);
        }
    const authRequest = await this.authService.generateAuthRequest(address);
    
    return {
        message: this.authService.generateSignatureMessage(authRequest),
        expiredAt: authRequest.expiredAt,
    };
  }
}
