import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {

    constructor(private boardsService: BoardsService){}


    @Get('/')
    getAllBoard() {
        return this.boardsService.getAllBoards();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDTO: CreateBoardDto ) : Board {

        return this.boardsService.createBoard(createBoardDTO);
    }

    //@param = ?id=1234
    @Get('/:id')
    getBoardById(@Param('id') id :string): Board{
        return this.boardsService.getBoardById(id)

    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        return this.boardsService.deleteBoard(id)
    }

    @Patch('/:id/status')
    updateBoardStatus(){}
}
