var NonFungiblePropertyERC721Token = artifacts.require('NonFungiblePropertyERC721Token');

contract('TestERC721Mintable', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];

    describe('match erc721 spec', function () {
        const numberOfToken = 5;

        beforeEach(async function () { 
            this.contract = await NonFungiblePropertyERC721Token.new({from: account1});
            for(let i=1; i <= numberOfToken; i++) {
                await this.contract.mint(account1, i);
            }    

            await this.contract.mint(account2, 100);
        })

        it('should return total supply', async function () { 
            let success = true;
            let totalSupply = 0;
            try{
                totalSupply = await this.contract.totalSupply();
            }
            catch{
                success = false
            }
            assert.equal(success, true, "Error caught while calling totalSupply()");
            if (success) {
                assert.equal(totalSupply, numberOfToken+1, `Token totalSupply should be ${numberOfToken}.`);
            }            
        })

        it('should get token balance', async function () { 
            let success = true;
            try{
                Account1Balance = await this.contract.balanceOf(account1);
                Account2Balance = await this.contract.balanceOf(account2);
            }
            catch{
                success = false
            }
            assert.equal(success, true, "Error caught while calling balanceOf()");
            if (success) {
                assert.equal(Account1Balance.eq(web3.utils.toBN(5)), true, `balanceOf(${Account1Balance}) should be ${numberOfToken}.`);
                assert.equal(Account2Balance.eq(web3.utils.toBN(1)), true, `balanceOf(${Account2Balance}) should be 1.`);
            } 
        })

        it('should return token uri', async function () { 
            let success = true;
            let token1URI, token2URI;
            try{
                token1URI = await this.contract.tokenURI(1);
                token2URI = await this.contract.tokenURI(2);
            }
            catch{
                success = false
            }
            assert.equal(success, true, "Error caught while calling tokenURI()");
            if (success) {
                assert.equal(token1URI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1', `Token has incorrect baseTokenURI.`);
                assert.equal(token2URI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2', `Token has incorrect baseTokenURI.`);
            } 
        })

        it('should transfer token from one owner to another', async function () { 
            let success = true;
            try{
                await this.contract.transferFrom(account1, account2, 1, {from: account1});
            }
            catch(e) {
                success = false
            }
            assert.equal(success, true, "Error caught while calling transferFrom()");
            if (success) {
                var ownerOfAccount2Token = await this.contract.ownerOf(1);
                assert.equal(ownerOfAccount2Token, account2, "Token invalid owner");

                let account1Balance = await this.contract.balanceOf(account1);
                let account2Balance = await this.contract.balanceOf(account2);

                assert.equal(account1Balance, 4, "Account 1 should now possess 4 tokens.");
                assert.equal(account2Balance, 2, "Account 2 balance should possess 2 tokens.")
            }            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await NonFungiblePropertyERC721Token.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            var success = true;
            try {
                await this.contract.mint(account1, 6, {from: account2});
            } catch {
                success = false;
            }
            assert.equal(success, false, "Caller must be contract owner");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert.equal(owner, account1, "Contract owner should be account 1");            
        })
    });
})