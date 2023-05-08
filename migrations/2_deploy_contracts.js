const Dollar=artifacts.require ("DOLLAR");
module.exports = function(deployer) {
    deployer.deploy(Dollar);}

/*
    const TokenH=artifacts.require ("TokenHub");
    module.exports = function(deployer) {
        deployer.deploy(TokenH);}    


        const Merkle=artifacts.require ("MerkleProof");
        module.exports = function(deployer) {
            deployer.deploy(Merkle);}  
        
*/            