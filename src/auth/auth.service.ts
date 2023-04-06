import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRequest } from 'src/entities';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class AuthService {
    constructor (
        @InjectRepository(AuthRequest) 
        private AuthRequestRepository: Repository<AuthRequest>,
    ) {}
    
    async generateAuthRequest (address: string) {
        const authRequest = new AuthRequest();

        authRequest.address = address;
        authRequest.uuid = v4();
        authRequest.expiredAt = new Date(new Date().getTime() + 10 * 60 * 1000);

        return await this.AuthRequestRepository.save(authRequest);
    }

    generateSignatureMessage(authRequest: AuthRequest) {
        return 'Welcome to Opensea Clone Coding!\n\nWallet Address:\n${authRequest.address}\n\nnonce:${authRequest.nonce}';
    }
}
